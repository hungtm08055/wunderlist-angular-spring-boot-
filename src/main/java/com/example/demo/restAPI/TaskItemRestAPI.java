package com.example.demo.restAPI;

import com.example.demo.DTO.TaskItemDTO;
import com.example.demo.domain.ListItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.service.ListService;
import com.example.demo.service.TaskItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TaskItemRestAPI {
    @Autowired
    TaskItemService taskItemService;

    @Autowired
    ListService listService;

//    @GetMapping("task/getAll")
//    public List<TaskItemDTO> getAll()
//    {
//        return taskItemService.findAll();
//    }
//
//    @GetMapping("task/getID/{id}")
//    public Optional<TaskItem> getByID(@PathVariable("id") long id)
//    {
//        Optional<TaskItem> taskItem = taskItemService.findOne(id);
//
//        if (!taskItem.isPresent())
//        {
//            System.out.println("Not found ID");
//        }
//        else
//        {
//            taskItem = taskItemService.findOne(Long.valueOf(id));
//        }
//        return taskItem;
//    }

    @GetMapping("/search") // tested
    public List<TaskItemDTO> search(@RequestParam(name = "keyword") String t)
    {
        List<TaskItemDTO> taskItems = taskItemService.findTaskItemName(t);
        return taskItems;
    }

    //show task by list_id
    @GetMapping("/task/getTaskByListID") // tested
    public List<TaskItemDTO> findTaskItems(@RequestParam(name = "list_id") long id,@RequestParam(name="status") long status)
    {
        List<TaskItemDTO> taskItems = taskItemService.findAllTaskByList(id,status);
        return taskItems;
    }

    @PostMapping("/task/add") // tested
    public ResponseEntity<TaskItem> add(@RequestBody TaskItemDTO taskItemDTO, @RequestParam(name = "list_id") long id)
    {
        Optional<ListItem> listItem = listService.findOne(id);
        if (!listItem.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            TaskItem taskItem = new TaskItem();
            taskItem.setId(taskItemDTO.getId());
            taskItem.setTitle(taskItemDTO.getTitle().replace("\"",""));
            taskItem.setStatus(taskItemDTO.getStatus());
            taskItem.setStar(taskItemDTO.getStar());
            taskItem.setDuedate(taskItemDTO.getDuedate());
            taskItem.setReminder(taskItemDTO.getReminder());
            taskItem.setCreateDate(taskItemDTO.getCreateDate());
            taskItem.setListItem(listItem.get());
            taskItem = taskItemService.save(taskItem);
            return new ResponseEntity<>(taskItem,HttpStatus.CREATED);
        }
    }

    @PutMapping("/task/update") // tested
    public ResponseEntity<TaskItem> update(@RequestBody TaskItemDTO taskItemDTO,@RequestParam(name = "id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);


        if (!taskItem.isPresent())
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else
        {
            TaskItem taskItem1 = taskItem.get();
            taskItem1.setTitle(taskItemDTO.getTitle().replace("\"",""));
            taskItemService.save(taskItem1);
            return new ResponseEntity<>(taskItem1, HttpStatus.OK);
        }
    }

    @PutMapping("/task/updateDuedate") // tested
    public ResponseEntity<TaskItem> updateDuedate(@RequestBody TaskItemDTO taskItemDTO,@RequestParam(name = "id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);

        if (!taskItem.isPresent())
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else
        {
            TaskItem taskItem1 = taskItem.get();
            taskItem1.setDuedate(taskItemDTO.getDuedate().replace("\"",""));
            taskItemService.save(taskItem1);
            return new ResponseEntity<>(taskItem1, HttpStatus.OK);
        }
    }

    @PutMapping("/task/updateReminder") // tested
    public ResponseEntity<TaskItem> updateReminder(@RequestBody TaskItemDTO taskItemDTO,@RequestParam(name = "id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);

        if (!taskItem.isPresent())
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else
        {
            TaskItem taskItem1 = taskItem.get();
            taskItem1.setReminder(taskItemDTO.getReminder().replace("\"",""));
            taskItemService.save(taskItem1);
            return new ResponseEntity<>(taskItem1, HttpStatus.OK);
        }
    }

    @PutMapping("/task/changeTaskStatus") // tested
    public ResponseEntity<TaskItem> markAsCompleted(@Validated TaskItemDTO taskItemDTO,@RequestParam(name = "status") long status,@RequestParam(name = "id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);

        if (!taskItem.isPresent())
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else
        {
            TaskItem taskItem1 = taskItem.get();
            taskItem1.setStatus(taskItemDTO.getStatus());
            taskItemService.save(taskItem1);
            return new ResponseEntity<>(taskItem1, HttpStatus.OK);
        }
    }

    @PutMapping("/task/changeTaskStar") // tested
    public ResponseEntity<TaskItem> markAsStarred(@Validated TaskItemDTO taskItemDTO,@RequestParam(name = "star") long star,@RequestParam(name = "id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);

        if (!taskItem.isPresent())
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else
        {
            TaskItem taskItem1 = taskItem.get();
            taskItem1.setStar(taskItemDTO.getStar());
            taskItemService.save(taskItem1);
            return new ResponseEntity<>(taskItem1, HttpStatus.OK);
        }
    }

    @GetMapping("/task/showTaskDetail") // tested
    public List<TaskItemDTO> showTaskDetail(@Validated TaskItemDTO taskItemDTO,@RequestParam(name = "id") long id)
    {
        List<TaskItemDTO> taskItems = taskItemService.findTaskByID(id);
        return taskItems;
    }

    @DeleteMapping("/task/delete") // tested
    public ResponseEntity<Void> delete(@RequestParam(name = "id") long id)
    {
        if (taskItemService.delete(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
