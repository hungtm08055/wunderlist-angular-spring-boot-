package com.example.demo.ServiceTests;

import com.example.demo.DTO.FileItemDTO;
import com.example.demo.domain.*;
import com.example.demo.repository.*;
import com.example.demo.service.FileItemService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FileServiceTests {
    @Autowired
    UserRepository userRepository;

    @Autowired
    ListRepository listRepository;

    @Autowired
    TaskItemRepository taskItemRepository;

    @Autowired
    FileItemRepository fileItemRepository;

    @Autowired
    FileItemService fileItemService;

    private User user;

    private ListItem listItem;

    private TaskItem taskItem;

    private FileItem fileItem;

    @Before
    @Transactional
    public void setUp() {
        user = new User();
        user.setUsername("admin1");
        user.setPassword("123");
        user = userRepository.save(user);

        listItem = new ListItem();
        listItem.setTitle("list");
        listItem.setUser(user);
        listItem = listRepository.save(listItem);

        taskItem = new TaskItem();
        taskItem.setTitle("taskItem");
        taskItem.setStatus(0);
        taskItem.setListItem(listItem);
        taskItem = taskItemRepository.save(taskItem);

        fileItem = new FileItem();
        fileItem.setTitle("image.png");
        fileItem.setTaskItem(taskItem);
        fileItem = fileItemRepository.save(fileItem);
    }

    @Test
    @Transactional
    public void assertThatFoundFileByTaskID() {
        List<FileItemDTO> fileItemDTOS = fileItemService.findFileByTaskID(fileItem.getTaskItem().getId());

        assertThat(fileItemDTOS.size() > 0);
    }

    @Test
    @Transactional
    public void assertThatNotFoundFileByTaskID() {
        Long id_task= 1L;

        List<FileItemDTO> fileItemDTOS = fileItemService.findFileByTaskID(id_task);

        assertThat(fileItemDTOS.size() == 0);
    }
}
