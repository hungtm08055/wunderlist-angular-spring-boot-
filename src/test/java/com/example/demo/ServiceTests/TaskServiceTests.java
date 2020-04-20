package com.example.demo.ServiceTests;

import com.example.demo.DTO.TaskItemDTO;
import com.example.demo.domain.ListItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.domain.User;
import com.example.demo.repository.ListRepository;
import com.example.demo.repository.TaskItemRepository;
import com.example.demo.repository.UserRepository;
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
public class TaskServiceTests {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ListRepository listRepository;

    @Autowired
    TaskItemRepository taskItemRepository;

    @Autowired
    TaskItemService taskItemService;

    private User user;

    private ListItem listItem;

    private TaskItem taskItem;

    @Before
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
    }

    @Test
    @Transactional
    public void assertThatFoundTaskBySearchTitle() {
        String search_keyword = "taskItem";

        List<TaskItemDTO> taskItemDTOS = taskItemService.findTaskItemName(search_keyword);

        assertThat(taskItemDTOS).hasSize(1);
    }

    @Test
    @Transactional
    public void assertNotFoundTaskBySearchTitle() {
        String search_keyword = "taskItemFake";

        List<TaskItemDTO> taskItemDTOS = taskItemService.findTaskItemName(search_keyword);

        assertThat(taskItemDTOS).hasSize(0);
    }

    @Test
    @Transactional
    public void assertThatFoundTaskByListID() {

        List<TaskItemDTO> taskItemDTOS = taskItemService.findAllTaskByList
                (taskItem.getListItem().getId(),taskItem.getStatus());

        assertThat(taskItemDTOS).hasSize(1);
    }

    @Test
    @Transactional
    public void assertThatNotFoundTaskByListID() {
        Long id_list = 1l;
        Integer status = 1;

        List<TaskItemDTO> taskItemDTOS = taskItemService.findAllTaskByList(id_list,status);

        assertThat(taskItemDTOS).hasSize(0);
    }

    @Test
    @Transactional
    public void assertThatFoundTaskByID() {

        List<TaskItemDTO> taskItemDTOS = taskItemService.findTaskByID(taskItem.getId());

        assertThat(taskItemDTOS).hasSize(1);
    }

    @Test
    @Transactional
    public void assertThatNotFoundTaskByID() {
        Long id_task = 1l;

        List<TaskItemDTO> taskItemDTOS = taskItemService.findTaskByID(id_task);

        assertThat(taskItemDTOS).hasSize(0);
    }
}
