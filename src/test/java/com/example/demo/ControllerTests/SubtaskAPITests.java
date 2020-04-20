package com.example.demo.ControllerTests;

import com.example.demo.DTO.SubtaskItemDTO;
import com.example.demo.DTO.TaskItemDTO;
import com.example.demo.DemoApplication;
import com.example.demo.domain.ListItem;
import com.example.demo.domain.SubtaskItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.domain.User;
import com.example.demo.repository.ListRepository;
import com.example.demo.repository.SubtaskItemRepository;
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

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = DemoApplication.class)
public class SubtaskAPITests {

    private MockMvc mockMvc;

    @Autowired
    WebApplicationContext webApplicationContext;

    private User user;

    private ListItem listItem;

    private TaskItem taskItem;

    private SubtaskItem subtaskItem;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ListRepository listRepository;

    @Autowired
    TaskItemRepository taskItemRepository;

    @Autowired
    SubtaskItemRepository subtaskItemRepository;

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

        subtaskItem = new SubtaskItem();
        subtaskItem.setTitle("subtask");
        subtaskItem.setStatus(0);
        subtaskItem.setTaskItem(taskItem);
        subtaskItem = subtaskItemRepository.save(subtaskItem);
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
    public void foundSubtaskByTask() throws Exception {
        String uri = "/subtask/getSubTaskByTaskID?id_task="+subtaskItem.getTaskItem().getId();
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        SubtaskItemDTO[] subtaskItemDTOS = mapFromJson(data, SubtaskItemDTO[].class);
        assertTrue(subtaskItemDTOS.length > 0);
    }

    @Test
    @Transactional
    public void notFoundSubtaskByTask() throws Exception {
        String uri = "/subtask/getSubTaskByTaskID?id_task=1";

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        SubtaskItemDTO[] subtaskItemDTOS = mapFromJson(data, SubtaskItemDTO[].class);
        assertTrue(subtaskItemDTOS.length == 0);
    }

    @Test
    @Transactional
    public void createSubTaskSuccess() throws Exception{
        String uri = "/subtask/add?task_id="+taskItem.getId();
        String inputJson = mapToJson(subtaskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(201, status);
    }

    @Test
    @Transactional
    public void createSubTaskFailBecauseNotFoundTaskID() throws Exception{
        String uri = "/subtask/add?task_id=1";
        String inputJson = mapToJson(subtaskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }

    @Test
    @Transactional
    public void updateSubTaskSuccess() throws Exception {
        String uri = "/subTask/update?id="+subtaskItem.getId();
        subtaskItem = new SubtaskItem();
        subtaskItem.setTitle("subtask update");
        String inputJson = mapToJson(subtaskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void updateSubTaskFailBecauseNotFoundID() throws Exception {
        String uri = "/subtask/update?id=1";
        subtaskItem = new SubtaskItem();
        subtaskItem.setTitle("subtask update");
        String inputJson = mapToJson(subtaskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }

    @Test
    @Transactional
    public void updateStatusSuccess() throws Exception {
        String uri = "/subTask/changeTaskStatus?status=1&id="+subtaskItem.getId();
        subtaskItem = new SubtaskItem();
        subtaskItem.setStatus(1);
        String inputJson = mapToJson(subtaskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void updateStatusFailBecauseNotFoundID() throws Exception {
        String uri = "/subTask/changeTaskStatus?status=1&id=1";
        subtaskItem = new SubtaskItem();
        subtaskItem.setStatus(1);
        String inputJson = mapToJson(subtaskItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }

    @Test
    @Transactional
    public void deleteSubTaskSuccess() throws Exception {
        String uri = "/subTask/delete?id="+subtaskItem.getId();

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void deleteSubTaskFailBecauseNotFoundID() throws Exception {
        String uri = "/subTask/delete?id=1";

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }
}
