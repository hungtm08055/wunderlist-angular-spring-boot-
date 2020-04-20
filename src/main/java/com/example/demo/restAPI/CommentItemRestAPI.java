package com.example.demo.restAPI;

import com.example.demo.DTO.CommentItemDTO;
import com.example.demo.domain.CommentItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.service.CommentItemService;
import com.example.demo.service.TaskItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

//    @GetMapping("/comment/getAll")
//    public List<CommentItem> getAll()
//    {
//        return (List<CommentItem>) commentItemService.findAll();
//    }
//
//    @GetMapping("/comment/getID/{id}")
//    public Optional<CommentItem> getByID(@PathVariable("id") long id)
//    {
//        return commentItemService.findOne(id);
//    }

    @PostMapping("/comment/add") // tested
    public ResponseEntity<CommentItem> add(@RequestBody CommentItemDTO commentItemDTO, @RequestParam(name = "id_task") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);
        if (!taskItem.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            CommentItem commentItem = new CommentItem();
            commentItem.setTitle(commentItemDTO.getTitle());
            commentItem.setTaskItem(taskItem.get());
            commentItem = commentItemService.save(commentItem);
            return new ResponseEntity<>(commentItem, HttpStatus.CREATED);
        }
    }

    @DeleteMapping("/comment/delete") // tested
    public ResponseEntity<Void> delete(@RequestParam(name = "id") long id)
    {
        if (commentItemService.delete(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/comment/showComment") // tested
    public List<CommentItemDTO> findCommentItems(@RequestParam(name = "id_task") long id) {
        List<CommentItemDTO> commentItemDTOS = commentItemService.findAllCommentByTask(id);
        return commentItemDTOS;
    }
}
