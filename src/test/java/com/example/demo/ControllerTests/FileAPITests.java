package com.example.demo.ControllerTests;

import com.example.demo.DTO.FileItemDTO;
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
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.fileUpload;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = DemoApplication.class)
public class FileAPITests {

    private MockMvc mockMvc;

    @Autowired
    WebApplicationContext webApplicationContext;

    private User user;

    private ListItem listItem;

    private TaskItem taskItem;

    private FileItem fileItem;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ListRepository listRepository;

    @Autowired
    TaskItemRepository taskItemRepository;

    @Autowired
    FileItemRepository fileItemRepository;

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

        fileItem = new FileItem();
        fileItem.setTitle("file.txt");
        fileItem.setTaskItem(taskItem);
        fileItem = fileItemRepository.save(fileItem);
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
    public void foundFileByTask() throws Exception {
        String uri = "/file/showFilebyTaskID?task_id="+fileItem.getTaskItem().getId();
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        FileItemDTO[] fileItemDTOS = mapFromJson(data, FileItemDTO[].class);
        assertTrue(fileItemDTOS.length > 0);
    }

    @Test
    @Transactional
    public void notFoundFileByTask() throws Exception {
        String uri = "/file/showFilebyTaskID?task_id=1";

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String data = mvcResult.getResponse().getContentAsString();
        FileItemDTO[] fileItemDTOS = mapFromJson(data, FileItemDTO[].class);
        assertTrue(fileItemDTOS.length == 0);
    }

    @Test
    @Transactional
    public void uploadFileSuccess() throws Exception {
        MockMultipartFile file = new MockMultipartFile(
                "file",
                "file.txt",
                MediaType.TEXT_PLAIN_VALUE,
                "Hello, World!".getBytes());
        mockMvc.perform(fileUpload("/uploadOneFile?task_id="+taskItem.getId()).file(file))
//                .andDo(print())
                .andExpect(status().isCreated());
    }

    @Test
    @Transactional
    public void uploadFileFailBecauseNotFoundTaskID() throws Exception {
        MockMultipartFile file = new MockMultipartFile(
                "file",
                "file.txt",
                MediaType.TEXT_PLAIN_VALUE,
                "Hello, World!".getBytes());
        mockMvc.perform(fileUpload("/uploadOneFile?task_id=1").file(file))
//                .andDo(print())
                .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void deleteFileSuccess() throws Exception {
        String filename = "file.txt";
        String uri = "/file/delete?id="+fileItem.getId()+"&file_name="+filename;

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
    }

    @Test
    @Transactional
    public void deleteFileFailBecauseNotFoundID() throws Exception {
        String uri = "/file/delete?id=1&file_name=noname";

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(404, status);
    }
}
