package com.example.demo.restAPI;

import com.example.demo.DTO.SubtaskItemDTO;
import com.example.demo.DTO.TaskItemDTO;
import com.example.demo.domain.SubtaskItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.service.SubtaskItemService;
import com.example.demo.service.TaskItemService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/subtask/getAll")
    public List<SubtaskItem> getAll()
    {
        return (List<SubtaskItem>) subtaskItemService.findAll();
    }

    @GetMapping("/subtask/getID/{id}")
    public Optional<SubtaskItem> getByID(@PathVariable("id") long id)
    {
        return subtaskItemService.findOne(id);
    }

    @PostMapping("/subtask/add")
    public SubtaskItem add(@RequestBody SubtaskItemDTO subtaskItemDTO,@RequestParam("task_id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);
        SubtaskItem subtaskItem = new SubtaskItem();
        subtaskItem.setTitle(subtaskItemDTO.getTitle());
        subtaskItem.setStatus(subtaskItemDTO.getStatus());
        subtaskItem.setTaskItem(taskItem.get());
        subtaskItem = subtaskItemService.save(subtaskItem);
        return subtaskItem;
    }

    @PutMapping("/subTask/update")
    public SubtaskItem update(@RequestBody SubtaskItemDTO subtaskItemDTO, @RequestParam(name = "id") long id)
    {
        Optional<SubtaskItem> subtaskItem = subtaskItemService.findOne(id);
        SubtaskItem subtaskItem1 = subtaskItem.get();

        if (!subtaskItem.isPresent())
        {
            return null;
        }
        else
        {
            subtaskItem1.setTitle(subtaskItemDTO.getTitle().replace("\"",""));
            subtaskItemService.save(subtaskItem1);
        }
        return subtaskItem1;
    }

    @PutMapping("/subTask/changeTaskStatus")
    public SubtaskItem changeStatus(@Validated SubtaskItemDTO subtaskItemDTO, @RequestParam(name = "status") long status, @RequestParam(name = "id") long id)
    {
        Optional<SubtaskItem> subtaskItem = subtaskItemService.findOne(id);
        // Option de ktra xem 1 bien co gia tri ton tai hay ko
        SubtaskItem subtaskItem1 = subtaskItem.get();

        if (!subtaskItem.isPresent())
        {
            return null;
        }
        else
        {
            subtaskItem1.setStatus(subtaskItemDTO.getStatus());
            subtaskItemService.save(subtaskItem1);
        }
        return subtaskItem1;
    }

    @DeleteMapping("/subTask/delete")
    public void delete(@RequestParam(name = "id") long id)
    {
        subtaskItemService.delete(id);
    }

    @GetMapping("/subtask/getSubTaskByTaskID")
    public List<SubtaskItemDTO> findSubTaskItems(@RequestParam(name = "id_task") long id) {
        List<SubtaskItemDTO> subtaskItemDTOS = subtaskItemService.findAllSubTaskByTask(id);
        return subtaskItemDTOS;
    }
}
