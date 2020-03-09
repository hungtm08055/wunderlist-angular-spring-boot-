package com.example.demo.restAPI;

import com.example.demo.DTO.CommentItemDTO;
import com.example.demo.domain.CommentItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.service.CommentItemService;
import com.example.demo.service.TaskItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CommentItemRestAPI {

    @Autowired
    CommentItemService commentItemService;

    @Autowired
    TaskItemService taskItemService;

    @GetMapping("/comment/getAll")
    public List<CommentItem> getAll()
    {
        return (List<CommentItem>) commentItemService.findAll();
    }

    @GetMapping("/comment/getID/{id}")
    public Optional<CommentItem> getByID(@PathVariable("id") long id)
    {
        return commentItemService.findOne(id);
    }

    @PostMapping("/comment/add")
    public CommentItem add(@RequestBody CommentItemDTO commentItemDTO,@RequestParam(name = "task_id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);
        CommentItem commentItem = new CommentItem();
        commentItem.setTitle(commentItemDTO.getTitle());
        commentItem.setTaskItem(taskItem.get());
        return commentItemService.save(commentItem);
    }

    @PutMapping("/comment/update")
    public CommentItem update(@RequestBody CommentItemDTO commentItemDTO)
    {
        Optional<CommentItem> commentItem = commentItemService.findOne(commentItemDTO.getId());
        CommentItem commentItem1 = commentItem.get();
        commentItem1.setTitle(commentItemDTO.getTitle());

        if (!commentItem.isPresent())
        {
            return null;
        }
        else
        {
            commentItemService.save(commentItem1);
        }
        return commentItem1;
    }

    @DeleteMapping("/comment/delete/{id}")
    public void delete(long id)
    {
        commentItemService.delete(id);
    }
}
