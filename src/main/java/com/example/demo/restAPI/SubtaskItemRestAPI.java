package com.example.demo.restAPI;

import com.example.demo.DTO.SubtaskItemDTO;
import com.example.demo.DTO.TaskItemDTO;
import com.example.demo.domain.SubtaskItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.service.SubtaskItemService;
import com.example.demo.service.TaskItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SubtaskItemRestAPI {

    @Autowired
    SubtaskItemService subtaskItemService;

    @Autowired
    TaskItemService taskItemService;

//    @GetMapping("/subtask/getAll")
//    public List<SubtaskItem> getAll()
//    {
//        return (List<SubtaskItem>) subtaskItemService.findAll();
//    }
//
//    @GetMapping("/subtask/getID/{id}")
//    public Optional<SubtaskItem> getByID(@PathVariable("id") long id)
//    {
//        return subtaskItemService.findOne(id);
//    }

    @GetMapping("/subtask/getSubTaskByTaskID") // tested
    public List<SubtaskItemDTO> findSubTaskItems(@RequestParam(name = "id_task") long id) {
        List<SubtaskItemDTO> subtaskItemDTOS = subtaskItemService.findAllSubTaskByTask(id);
        return subtaskItemDTOS;
    }

    @PostMapping("/subtask/add") // tested
    public ResponseEntity<SubtaskItem> add(@RequestBody SubtaskItemDTO subtaskItemDTO, @RequestParam("task_id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);
        if (!taskItem.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            SubtaskItem subtaskItem = new SubtaskItem();
            subtaskItem.setTitle(subtaskItemDTO.getTitle());
            subtaskItem.setStatus(subtaskItemDTO.getStatus());
            subtaskItem.setTaskItem(taskItem.get());
            subtaskItem = subtaskItemService.save(subtaskItem);
            return new ResponseEntity<>(subtaskItem, HttpStatus.CREATED);
        }
    }

    @PutMapping("/subTask/update") // tested
    public ResponseEntity<SubtaskItem> update(@RequestBody SubtaskItemDTO subtaskItemDTO, @RequestParam(name = "id") long id)
    {
        Optional<SubtaskItem> subtaskItem = subtaskItemService.findOne(id);

        if (!subtaskItem.isPresent())
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else
        {
            SubtaskItem subtaskItem1 = subtaskItem.get();
            subtaskItem1.setTitle(subtaskItemDTO.getTitle().replace("\"",""));
            subtaskItemService.save(subtaskItem1);
            return new ResponseEntity<>(subtaskItem1,HttpStatus.OK);
        }
    }

    @PutMapping("/subTask/changeTaskStatus") // tested
    public ResponseEntity<SubtaskItem> changeStatus(@Validated SubtaskItemDTO subtaskItemDTO, @RequestParam(name = "status") long status, @RequestParam(name = "id") long id)
    {
        Optional<SubtaskItem> subtaskItem = subtaskItemService.findOne(id);
        // Option de ktra xem 1 bien co gia tri ton tai hay ko

        if (!subtaskItem.isPresent())
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else
        {
            SubtaskItem subtaskItem1 = subtaskItem.get();
            subtaskItem1.setStatus(subtaskItemDTO.getStatus());
            subtaskItemService.save(subtaskItem1);
            return new ResponseEntity<>(subtaskItem1,HttpStatus.OK);
        }
    }

    @DeleteMapping("/subTask/delete") // tested
    public ResponseEntity<Void> delete(@RequestParam(name = "id") long id)
    {
        if (subtaskItemService.delete(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
