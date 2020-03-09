package com.example.demo.service;

import com.example.demo.domain.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService{
    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Iterable<User> findAll()
    {
        return userRepository.findAll();
    }
    public Optional<User> findOne(long id)
    {
        return userRepository.findById(id);
    }
    public User save(User user)
    {
        return userRepository.save(user);
    }
    public void delete(long id)
    {
        userRepository.deleteById(id);
    }

    public User findAccount(String username, String password)
    {
        return userRepository.findUserByUsernameAndPassword(username,password);
    }
}
