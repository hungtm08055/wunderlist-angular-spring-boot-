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

@CrossOrigin(origins = "http://localhost:4200")
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
    public CommentItem add(@RequestBody CommentItemDTO commentItemDTO,@RequestParam(name = "id_task") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);
        CommentItem commentItem = new CommentItem();
        commentItem.setTitle(commentItemDTO.getTitle());
        commentItem.setTaskItem(taskItem.get());
        commentItem = commentItemService.save(commentItem);
        return commentItem;
    }


    @DeleteMapping("/comment/delete")
    public void delete(@RequestParam(name = "id") long id)
    {
        commentItemService.delete(id);
    }

    @GetMapping("/comment/showComment")
    public List<CommentItemDTO> findCommentItems(@RequestParam(name = "id_task") long id) {
        List<CommentItemDTO> commentItemDTOS = commentItemService.findAllCommentByTask(id);
        return commentItemDTOS;
    }
}
