package com.example.demo.service;

import com.example.demo.DTO.ListItemDTO;
import com.example.demo.DTO.TaskItemDTO;
import com.example.demo.domain.TaskItem;
import com.example.demo.repository.TaskItemRepository;
import com.fasterxml.classmate.MemberResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class TaskItemService {

    @Autowired
    TaskItemRepository taskItemRepository;
    private MemberResolver fileStorageLocation;

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

    public boolean delete(long id)
    {
        if(taskItemRepository.findById(id).isPresent()) {
            taskItemRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // tested
    public List<TaskItemDTO> findTaskItemName(String title)
    {
        List<TaskItem> taskItems = taskItemRepository.findAllByTitle(title);
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


    public List<TaskItemDTO> findAllTaskByList(long id,long status)
    {
        List<TaskItem> taskItems =  taskItemRepository.findTaskItemByListItem(id,status);
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
        List<TaskItem> taskItems =  taskItemRepository.findTaskItemById(id);
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

}

