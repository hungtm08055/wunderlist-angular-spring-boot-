package com.example.demo.restAPI;

import com.example.demo.DTO.SubtaskItemDTO;
import com.example.demo.domain.SubtaskItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.service.SubtaskItemService;
import com.example.demo.service.TaskItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
        return subtaskItemService.save(subtaskItem);
    }

    @PutMapping("/subtask/update")
    public SubtaskItem update(@RequestBody SubtaskItemDTO subtaskItemDTO)
    {
        Optional<SubtaskItem> subtaskItem = subtaskItemService.findOne(subtaskItemDTO.getId());
        SubtaskItem subtaskItem1 = subtaskItem.get();
        subtaskItem1.setTitle(subtaskItemDTO.getTitle());
        subtaskItem1.setStatus(subtaskItemDTO.getStatus());

        if (!subtaskItem.isPresent())
        {
            return null;
        }
        else
        {
            subtaskItemService.save(subtaskItem1);
        }
        return subtaskItem1;
    }

    @DeleteMapping("/subtask/delete/{id}")
    public void delete(@PathVariable("id") long id)
    {
        subtaskItemService.delete(id);
    }
}
