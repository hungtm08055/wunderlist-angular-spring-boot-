package com.example.demo.ServiceTests;

import com.example.demo.DTO.SubtaskItemDTO;
import com.example.demo.domain.ListItem;
import com.example.demo.domain.SubtaskItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.domain.User;
import com.example.demo.repository.ListRepository;
import com.example.demo.repository.SubtaskItemRepository;
import com.example.demo.repository.TaskItemRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.SubtaskItemService;
import com.example.demo.service.TaskItemService;
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
public class SubtaskServiceTests {
    @Autowired
    UserRepository userRepository;

    @Autowired
    ListRepository listRepository;

    @Autowired
    TaskItemRepository taskItemRepository;

    @Autowired
    SubtaskItemRepository subtaskItemRepository;

    @Autowired
    SubtaskItemService subtaskItemService;

    private User user;

    private ListItem listItem;

    private TaskItem taskItem;

    private SubtaskItem subtaskItem;

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

        subtaskItem = new SubtaskItem();
        subtaskItem.setTitle("sub task");
        subtaskItem.setStatus(0);
        subtaskItem.setTaskItem(taskItem);
        subtaskItem = subtaskItemRepository.save(subtaskItem);
    }

    @Test
    @Transactional
    public void assertThatFoundSubTaskByTaskID() {
        List<SubtaskItemDTO> subtaskItemDTOS = subtaskItemService
                .findAllSubTaskByTask(subtaskItem.getTaskItem().getId());
        assertThat(subtaskItemDTOS.size() > 0);
    }

    @Test
    @Transactional
    public void assertThatNotFoundSubTaskByTaskID() {
        List<SubtaskItemDTO> subtaskItemDTOS = subtaskItemService
                .findAllSubTaskByTask(subtaskItem.getTaskItem().getId());
        assertThat(subtaskItemDTOS.size() == 0);
    }
}
