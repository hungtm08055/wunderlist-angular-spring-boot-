package com.example.demo.service;

import com.example.demo.DTO.ListItemDTO;
import com.example.demo.DTO.TaskItemDTO;
import com.example.demo.domain.TaskItem;
import com.example.demo.repository.TaskItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class TaskItemService {

    @Autowired
    TaskItemRepository taskItemRepository;

    public List<TaskItemDTO> findAll()
    {
        List<TaskItem> taskItems = (List<TaskItem>) taskItemRepository.findAll();
        List<TaskItemDTO> taskItemDTOS = new ArrayList<>();
        for (TaskItem taskItem : taskItems)
        {
            TaskItemDTO taskItemDTO = new TaskItemDTO();
            taskItemDTO.setId((int) taskItem.getId());
            taskItemDTO.setTitle(taskItem.getTitle());
            taskItemDTO.setStatus(taskItem.getStatus());
            taskItemDTO.setStar(taskItem.getStar());
            taskItemDTO.setDuedate(taskItem.getDuedate());
            taskItemDTO.setReminder(taskItem.getReminder());
            taskItemDTO.setCreatedate(taskItem.getCreateDate().toEpochMilli());
            taskItemDTOS.add(taskItemDTO);
        }
        return taskItemDTOS;
    }

    public Optional<TaskItem> findOne(long id)
    {
        return taskItemRepository.findById(id);
    }

    public TaskItem save(TaskItem taskItem)
    {
        return taskItemRepository.save(taskItem);
    }

    public void delete(long id)
    {
        taskItemRepository.deleteById(id);
    }

    public TaskItem findTaskItemName(String title)
    {
        return taskItemRepository.findAllByTitle(title);
    }

    public List<TaskItemDTO> findAllTaskByList(long id,long status)
    {
        List<TaskItem> taskItems = (List<TaskItem>) taskItemRepository.findTaskItemByListItem(id,status);
        List<TaskItemDTO> taskItemDTOS = new ArrayList<>();
        for (TaskItem taskItem : taskItems)
        {
            TaskItemDTO taskItemDTO = new TaskItemDTO();
            taskItemDTO.setId((int) taskItem.getId());
            taskItemDTO.setTitle(taskItem.getTitle());
            taskItemDTO.setStatus(taskItem.getStatus());
            taskItemDTO.setStar(taskItem.getStar());
            taskItemDTO.setDuedate(taskItem.getDuedate());
            taskItemDTO.setReminder(taskItem.getReminder());
            taskItemDTO.setCreatedate(taskItem.getCreateDate().toEpochMilli());
            taskItemDTOS.add(taskItemDTO);
        }
        return taskItemDTOS;
    }

    public List<TaskItemDTO> findTaskByID(long id)
    {
        List<TaskItem> taskItems = (List<TaskItem>) taskItemRepository.findTaskItemById(id);
        List<TaskItemDTO> taskItemDTOS = new ArrayList<>();
        for (TaskItem taskItem : taskItems)
        {
            TaskItemDTO taskItemDTO = new TaskItemDTO();
            taskItemDTO.setId((int) taskItem.getId());
            taskItemDTO.setTitle(taskItem.getTitle());
            taskItemDTO.setStatus(taskItem.getStatus());
            taskItemDTO.setStar(taskItem.getStar());
            taskItemDTO.setDuedate(taskItem.getDuedate());
            taskItemDTO.setReminder(taskItem.getReminder());
            taskItemDTO.setCreatedate(taskItem.getCreateDate().toEpochMilli());
            taskItemDTOS.add(taskItemDTO);
        }
        return taskItemDTOS;
    }

//    public TaskItem markAsCompeleted(long status,long id)
//    {
//        return taskItemRepository.markAsCompleted(status,id);
//    }
//
//    public TaskItem markAsUncompeleted(long status,long id)
//    {
//        return taskItemRepository.markAsUncompleted(status,id);
//    }
}

