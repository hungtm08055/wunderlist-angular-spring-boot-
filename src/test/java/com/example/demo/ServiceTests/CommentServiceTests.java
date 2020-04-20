package com.example.demo.ServiceTests;

import com.example.demo.DTO.CommentItemDTO;
import com.example.demo.domain.CommentItem;
import com.example.demo.domain.ListItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.domain.User;
import com.example.demo.repository.*;
import com.example.demo.service.CommentItemService;
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
public class CommentServiceTests {
    @Autowired
    UserRepository userRepository;

    @Autowired
    ListRepository listRepository;

    @Autowired
    TaskItemRepository taskItemRepository;

    @Autowired
    CommentItemRepository commentItemRepository;

    @Autowired
    CommentItemService commentItemService;

    private User user;

    private ListItem listItem;

    private TaskItem taskItem;

    private CommentItem commentItem;

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

        commentItem = new CommentItem();
        commentItem.setTitle("comment");
        commentItem.setTaskItem(taskItem);
        commentItem = commentItemRepository.save(commentItem);
    }

    @Test
    @Transactional
    public void assertThatFoundCommentByTaskID() {
        List<CommentItemDTO> commentItemDTOS = commentItemService.findAllCommentByTask(commentItem.getTaskItem().getId());

        assertThat(commentItemDTOS.size() > 0 );
    }

    @Test
    @Transactional
    public void assertThatNotFoundCommentByTaskID() {
        Long id_task = 1L;
        List<CommentItemDTO> commentItemDTOS = commentItemService.findAllCommentByTask(id_task);

        assertThat(commentItemDTOS.size() == 0 );
    }
}
