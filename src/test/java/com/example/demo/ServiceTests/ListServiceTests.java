package com.example.demo.ServiceTests;

import com.example.demo.domain.ListItem;
import com.example.demo.domain.User;
import com.example.demo.repository.ListRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.ListService;
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
public class ListServiceTests {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ListRepository listRepository;

    @Autowired
    ListService listService;

    private User user;
    private ListItem listItem;

    @Before
    public void setUp() {
        user = new User();
        user.setId(1L);
        user.setUsername("admin1");
        user.setPassword("123");
        user = userRepository.save(user);

        listItem = new ListItem();
        listItem.setId(1L);
        listItem.setTitle("list");
        listItem.setUser(user);
        listItem = listRepository.save(listItem);
    }

    @Test
    @Transactional
    public void assertThatFoundListByUserID() {
        List<ListItem> listItem1 =  listService.findAllListbyUserID(listItem.getUser().getId());

        assertThat(listItem1.size() > 0);
    }

    @Test
    @Transactional
    public void assertThatNotFoundListByUserID() {
        Long user_id = 2L;

        List<ListItem> listItem1 =  listService.findAllListbyUserID(user_id);

        assertThat(listItem1.size() == 0);
    }
}
