package com.example.demo.ControllerTests;

import com.example.demo.DTO.TaskItemDTO;
import com.example.demo.DemoApplication;
import com.example.demo.domain.ListItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.domain.User;
import com.example.demo.repository.ListRepository;
import com.example.demo.repository.TaskItemRepository;
import com.example.demo.repository.UserRepository;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;
import org.thymeleaf.spring5.expression.Mvc;

import java.io.IOException;
import java.time.Instant;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = DemoApplication.class)
public class TaskAPITests {

    private MockMvc mockMvc;

    @Autowired
    WebApplicationContext webApplicationContext;

    private User user;

    private ListItem listItem;

    private TaskItem taskItem;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ListRepository listRepository;

    @Autowired
    TaskItemRepository taskItemRepository;

    @Before
    @Transactional
    public void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        user = new User();
        user.setUsername("admin1");
        user.setPassword("1");
        user =  userRepository.save(user);

        listItem = new ListItem();
        listItem.setTitle("list");
        listItem.setUser(user);
        listItem = listRepository.save(listItem);

        taskItem = new TaskItem();
        taskItem.setTitle("task test");
        taskItem.setStatus(0);
        taskItem.setStar(0);
        taskItem.setDuedate("08/05/1998");
        taskItem.setReminder("03:00 AM");
        taskItem.setListItem(listItem);
        taskItem = taskItemRepository.save(taskItem);
    }

    protected String mapToJson(Object obj) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(obj);
    }

    protected <T> T mapFromJson(String json, Class<T> clazz)
            throws JsonParseException, JsonMappingException, IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(json, clazz);
    }

    @Test
    @Transactional
    public void foundSearchResult() throws Exception {
        String keyword = "task test";
        String uri = "/search?keyword="+keyword;

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
        .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        TaskItemDTO[] taskItems = mapFromJson(data, TaskItemDTO[].class);
        assertTrue(taskItems.length > 0);
    }

    @Test
    @Transactional
    public void NotFoundSearchResult() throws Exception {
        String keyword = "sth that nonsense";
        String uri = "/search?keyword="+keyword;

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        TaskItemDTO[] taskItems = mapFromJson(data, TaskItemDTO[].class);
        assertTrue(taskItems.length == 0);
    }

    @Test
    @Transactional
    public void foundTaskByID() throws Exception {
        String uri = "/task/showTaskDetail?id="+taskItem.getId();

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        TaskItemDTO[] list = mapFromJson(data, TaskItemDTO[].class);
        assertTrue(list.length > 0);
    }

    @Test
    @Transactional
    public void notFoundTaskByID() throws Exception {
        String uri = "/task/showTaskDetail?id=1";

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        TaskItemDTO[] list = mapFromJson(data, TaskItemDTO[].class);
        assertTrue(list.length == 0);
    }

    @Test
    @Transactional
    public void foundTaskByList() throws Exception {
        String uri = "/task/getTaskByListID?list_id="
                +taskItem.getListItem().getId()
                +"&status=" +taskItem.getStatus();

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        TaskItemDTO[] list = mapFromJson(data, TaskItemDTO[].class);
        assertTrue(list.length > 0);
    }

    @Test
    @Transactional
    public void notFoundTaskByList() throws Exception {
        String uri = "/task/getTaskByListID?list_id=1&status=0";

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        TaskItemDTO[] list = mapFromJson(data, TaskItemDTO[].class);
        assertTrue(list.length == 0);
    }

    @Test
    @Transactional
    public void createTaskSuccess() throws Exception{
        String uri = "/task/add?list_id="+listItem.getId();
        String inputJson = mapToJson(taskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(201, status);
    }

    @Test
    @Transactional
    public void createTaskFailBecauseNotFoundListID() throws Exception{
        String uri = "/task/add?list_id=1";
        String inputJson = mapToJson(taskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }

    @Test
    @Transactional
    public void updateTaskSuccess() throws Exception {
        String uri = "/task/update?id="+taskItem.getId();
        taskItem = new TaskItem();
        taskItem.setTitle("task test update");
        String inputJson = mapToJson(taskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void updateTaskFailBecauseNotFoundID() throws Exception {
        String uri = "/task/update?id=1";
        taskItem = new TaskItem();
        taskItem.setTitle("task test update");
        String inputJson = mapToJson(taskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }

    @Test
    @Transactional
    public void updateDueDateSuccess() throws Exception {
        String uri = "/task/updateDuedate?id="+taskItem.getId();
        taskItem = new TaskItem();
        taskItem.setDuedate("24/09/2000");
        String inputJson = mapToJson(taskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void updateDueDateFailBecauseNotFoundID() throws Exception {
        String uri = "/task/updateDuedate?id=1";
        taskItem = new TaskItem();
        taskItem.setDuedate("24/09/2000");
        String inputJson = mapToJson(taskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }


    @Test
    @Transactional
    public void updateReminderSuccess() throws Exception {
        String uri = "/task/updateReminder?id="+taskItem.getId();
        taskItem = new TaskItem();
        taskItem.setReminder("09:00 PM");
        String inputJson = mapToJson(taskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void updateReminderFailBecauseNotFoundID() throws Exception {
        String uri = "/task/updateReminder?id=1";
        taskItem = new TaskItem();
        taskItem.setReminder("09:00 PM");
        String inputJson = mapToJson(taskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }

    @Test
    @Transactional
    public void updateStatusSuccess() throws Exception {
        String uri = "/task/changeTaskStatus?status=1&id="+taskItem.getId();
        taskItem = new TaskItem();
        taskItem.setStatus(1);
        String inputJson = mapToJson(taskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void updateStatusFailBecauseNotFoundID() throws Exception {
        String uri = "/task/changeTaskStatus?status=1&id=1";
        taskItem = new TaskItem();
        taskItem.setStatus(1);
        String inputJson = mapToJson(taskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }

    @Test
    @Transactional
    public void updateStarSuccess() throws Exception {
        String uri = "/task/changeTaskStar?star=1&id="+taskItem.getId();
        taskItem = new TaskItem();
        taskItem.setStar(1);
        String inputJson = mapToJson(taskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void updateStarFailBecauseNotFoundID() throws Exception {
        String uri = "/task/changeTaskStar?star=1&id=1";
        taskItem = new TaskItem();
        taskItem.setStar(1);
        String inputJson = mapToJson(taskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }

    @Test
    @Transactional
    public void deleteTaskSuccess() throws Exception {
        String uri = "/task/delete?id="+taskItem.getId();

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void deleteTaskFailBecauseNotFoundID() throws Exception {
        String uri = "/task/delete?id=1";

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }
}
