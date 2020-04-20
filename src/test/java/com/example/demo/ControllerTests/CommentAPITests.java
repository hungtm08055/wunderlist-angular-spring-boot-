package com.example.demo.ControllerTests;

import com.example.demo.DTO.CommentItemDTO;
import com.example.demo.DTO.SubtaskItemDTO;
import com.example.demo.DemoApplication;
import com.example.demo.domain.*;
import com.example.demo.repository.*;
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
public class CommentAPITests {

    private MockMvc mockMvc;

    @Autowired
    WebApplicationContext webApplicationContext;

    private User user;

    private ListItem listItem;

    private TaskItem taskItem;

    private CommentItem commentItem;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ListRepository listRepository;

    @Autowired
    TaskItemRepository taskItemRepository;

    @Autowired
    CommentItemRepository commentItemRepository;

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

        commentItem = new CommentItem();
        commentItem.setTitle("subtask");
        commentItem.setTaskItem(taskItem);
        commentItem = commentItemRepository.save(commentItem);
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
    public void foundCommentByTask() throws Exception {
        String uri = "/comment/showComment?id_task="+taskItem.getId();
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        CommentItemDTO[] commentItemDTOS = mapFromJson(data, CommentItemDTO[].class);
        assertTrue(commentItemDTOS.length > 0);
    }

    @Test
    @Transactional
    public void notFoundCommentByTask() throws Exception {
        String uri = "/comment/showComment?id_task=1";

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        CommentItemDTO[] commentItemDTOS = mapFromJson(data, CommentItemDTO[].class);
        assertTrue(commentItemDTOS.length == 0);
    }

    @Test
    @Transactional
    public void createCommentSuccess() throws Exception{
        String uri = "/comment/add?id_task="+taskItem.getId();
        String inputJson = mapToJson(commentItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(201, status);
    }

    @Test
    @Transactional
    public void createcommentFailBecauseNotFoundTaskID() throws Exception{
        String uri = "/comment/add?id_task=1";
        String inputJson = mapToJson(commentItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }

    @Test
    @Transactional
    public void deleteCommentSuccess() throws Exception {
        String uri = "/comment/delete?id="+commentItem.getId();

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void deleteCommentFailBecauseNotFoundID() throws Exception {
        String uri = "/comment/delete?id=1";

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }
}
