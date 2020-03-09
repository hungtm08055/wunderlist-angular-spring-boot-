package com.example.demo.service;

import com.example.demo.domain.CommentItem;
import com.example.demo.repository.CommentItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentItemService {
    @Autowired
    CommentItemRepository commentItemRepository;

    public Iterable<CommentItem> findAll()
    {
        return commentItemRepository.findAll();
    }

    public Optional<CommentItem> findOne(long id)
    {
        return commentItemRepository.findById(id);
    }
    public CommentItem save(CommentItem commentItem)
    {
        return commentItemRepository.save(commentItem);
    }

    public void delete(long id)
    {
        commentItemRepository.deleteById(id);
    }
}
