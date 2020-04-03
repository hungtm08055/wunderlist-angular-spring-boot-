package com.example.demo.service;

import com.example.demo.DTO.CommentItemDTO;
import com.example.demo.domain.CommentItem;
import com.example.demo.repository.CommentItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
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

    public List<CommentItemDTO> findAllCommentByTask(long id) {
        List<CommentItem> commentItems = commentItemRepository.findAllByTaskItem(id);
        List<CommentItemDTO> commentItemDTOS = new ArrayList<>();
        for (CommentItem commentItem : commentItems) {
            CommentItemDTO commentItemDTO = new CommentItemDTO();
            commentItemDTO.setId(commentItem.getId());
            commentItemDTO.setTitle(commentItem.getTitle());
            commentItemDTO.setCreateDate(commentItem.getCreateDate());
            commentItemDTOS.add(commentItemDTO);
        }
        return commentItemDTOS;
    }
}
