package com.example.demo.ControllerTests;

import com.example.demo.DemoApplication;
import com.example.demo.domain.ListItem;
import com.example.demo.domain.User;
import com.example.demo.repository.ListRepository;
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
public class ListAPITests {

    private MockMvc mockMvc;

    @Autowired
    WebApplicationContext webApplicationContext;

    private User user;

    private ListItem listItem;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ListRepository listRepository;

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
    public void FoundListByUser() throws Exception{
        String uri = "http://localhost:8080/list/getListByUserID?user_id="+listItem.getUser().getId();

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
            .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        ListItem[] list = mapFromJson(data, ListItem[].class);
        assertTrue(list.length > 0);
    }

    @Test
    @Transactional
    public void NotFoundListByUser() throws Exception{
        Long user_id = 2L;
        String uri = "http://localhost:8080/list/getListByUserID?user_id="+user_id;

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        ListItem[] list = mapFromJson(data, ListItem[].class);
        assertTrue(list.length == 0);
    }

    @Test
    @Transactional
    public void createListSuccess() throws Exception{
        String uri = "/list/add?user_id="+user.getId();
        String inputJson = mapToJson(listItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(201, status);
    }

    @Test
    @Transactional
    public void createListFailBecauseNotFoundUserID() throws Exception{
        String uri = "/list/add?user_id="+1;

        String inputJson = mapToJson(listItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }

    @Test
    @Transactional
    public void updateListSuccess() throws Exception {
        String uri = "/list/update?id="+listItem.getId();
        listItem = new ListItem();
        listItem.setTitle("list update");
        String inputJson = mapToJson(listItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
        .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void updateListFailBecauseNotFoundID() throws Exception {
        String uri = "/list/update?id="+1;
        listItem = new ListItem();
        listItem.setTitle("list update");
        String inputJson = mapToJson(listItem);

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.put(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }

    @Test
    @Transactional
    public void deleteListSuccess() throws Exception {
        String uri = "/list/delete?id="+listItem.getId();

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void deleteListFailBecauseNotFoundID() throws Exception {
        String uri = "/list/delete?id="+1;

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }
}
