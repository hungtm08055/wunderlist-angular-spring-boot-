package com.example.demo.ServiceTests;

import com.example.demo.domain.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTests {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    private User user;

    @Before
    @Transactional
    public void setUp() {
        user = new User();
        user.setId(1L);
        user.setUsername("admin1");
        user.setPassword("123");
        user = userRepository.save(user);
    }

    @Test
    @Transactional
    public void assertThatUserFound() {
        String u = "admin1";
        String p = "123";

        User user1 = userService.findAccount(u,p);

        assertThat(user1).isEqualTo(user);
    }

    @Test
    @Transactional
    public void assertThatUserNotFound() {
        String u = "admin2";
        String p = "456";

        User user1 = userService.findAccount(u,p);

        assertThat(user1).isNotEqualTo(user);
    }
}
