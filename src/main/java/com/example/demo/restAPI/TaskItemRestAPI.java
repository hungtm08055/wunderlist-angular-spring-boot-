package com.example.demo.restAPI;

import com.example.demo.DTO.TaskItemDTO;
import com.example.demo.domain.ListItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.service.ListService;
import com.example.demo.service.TaskItemService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("task/getAll")
    public List<TaskItemDTO> getAll()
    {
        return taskItemService.findAll();
    }

    @GetMapping("task/getID/{id}")
    public Optional<TaskItem> getByID(@PathVariable("id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);

        if (!taskItem.isPresent())
        {
            System.out.println("Not found ID");
        }
        else
        {
            taskItem = taskItemService.findOne(Long.valueOf(id));
        }
        return taskItem;
    }

    @GetMapping("/search")
    public List<TaskItemDTO> search(@RequestParam(name = "keyword") String t)
    {
        List<TaskItemDTO> taskItems = (List<TaskItemDTO>) taskItemService.findTaskItemName(t);
        return taskItems;
    }

    //show task by list_id
    @GetMapping("/task/getTaskByListID")
    public List<TaskItemDTO> findTaskItems(@RequestParam(name = "list_id") long id,@RequestParam(name="status") long status)
    {
        List<TaskItemDTO> taskItems = (List<TaskItemDTO>) taskItemService.findAllTaskByList(id,status);
        return taskItems;

    }

    @PostMapping("/task/add")
    public TaskItem add(@RequestBody TaskItemDTO taskItemDTO, @RequestParam(name = "list_id") long id)
    {
        Optional<ListItem> listItem = listService.findOne(id);
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
        return taskItem;
    }

    @PutMapping("/task/update")
    public TaskItem update(@RequestBody TaskItemDTO taskItemDTO,@RequestParam(name = "id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);
        TaskItem taskItem1 = taskItem.get();

        if (!taskItem.isPresent())
        {
            return null;
        }
        else
        {
            taskItem1.setTitle(taskItemDTO.getTitle().replace("\"",""));
            taskItemService.save(taskItem1);
        }
        return taskItem1;
    }

    @PutMapping("/task/updateDuedate")
    public TaskItem updateDuedate(@RequestBody TaskItemDTO taskItemDTO,@RequestParam(name = "id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);
        TaskItem taskItem1 = taskItem.get();

        if (!taskItem.isPresent())
        {
            return null;
        }
        else
        {
            taskItem1.setDuedate(taskItemDTO.getDuedate().replace("\"",""));
            taskItemService.save(taskItem1);
        }
        return taskItem1;
    }

    @PutMapping("/task/updateReminder")
    public TaskItem updateReminder(@RequestBody TaskItemDTO taskItemDTO,@RequestParam(name = "id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);
        TaskItem taskItem1 = taskItem.get();

        if (!taskItem.isPresent())
        {
            return null;
        }
        else
        {
            taskItem1.setReminder(taskItemDTO.getReminder().replace("\"",""));
            taskItemService.save(taskItem1);
        }
        return taskItem1;
    }

    @PutMapping("/task/changeTaskStatus")
    public TaskItem markAsCompleted(@Validated TaskItemDTO taskItemDTO,@RequestParam(name = "status") long status,@RequestParam(name = "id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);
        TaskItem taskItem1 = taskItem.get();

        if (!taskItem.isPresent())
        {
            return null;
        }
        else
        {
            taskItem1.setStatus(taskItemDTO.getStatus());
            taskItemService.save(taskItem1);
        }
        return taskItem1;
    }

    @PutMapping("/task/changeTaskStar")
    public TaskItem markAsStarred(@Validated TaskItemDTO taskItemDTO,@RequestParam(name = "star") long star,@RequestParam(name = "id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);
        TaskItem taskItem1 = taskItem.get();


        if (!taskItem.isPresent())
        {
            return null;
        }
        else
        {
            taskItem1.setStar(taskItemDTO.getStar());
            taskItemService.save(taskItem1);
        }
        return taskItem1;
    }

    @GetMapping("/task/showTaskDetail")
    public List<TaskItemDTO> showTaskDetail(@Validated TaskItemDTO taskItemDTO,@RequestParam(name = "id") long id)
    {
        List<TaskItemDTO> taskItems = (List<TaskItemDTO>) taskItemService.findTaskByID(id);
        return taskItems;
    }

    @DeleteMapping("/task/delete")
    public void delete(@RequestParam(name = "id") long id)
    {
        taskItemService.delete(id);
    }

}
