package com.example.demo.service;

import com.example.demo.DTO.SubtaskItemDTO;
import com.example.demo.domain.SubtaskItem;
import com.example.demo.domain.TaskItem;
import com.example.demo.repository.SubtaskItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SubtaskItemService {

    @Autowired
    SubtaskItemRepository subtaskItemRepository;

    public Iterable<SubtaskItem> findAll()
    {
        return subtaskItemRepository.findAll();
    }

    public Optional<SubtaskItem> findOne(long id)
    {
        return subtaskItemRepository.findById(id);
    }

    public SubtaskItem save(SubtaskItem subtaskItem)
    {
        return subtaskItemRepository.save(subtaskItem);
    }

    public void delete(long id)
    {
        subtaskItemRepository.deleteById(id);
    }

    public List<SubtaskItemDTO> findAllSubTaskByTask(long id) {
        List<SubtaskItem> subtaskItems = subtaskItemRepository.findAllByTaskItem(id);
        List<SubtaskItemDTO> subtaskItemDTOS = new ArrayList<>();
        for (SubtaskItem subtaskItem: subtaskItems) {
            SubtaskItemDTO subtaskItemDTO = new SubtaskItemDTO();
            subtaskItemDTO.setId(subtaskItem.getId());
            subtaskItemDTO.setTitle(subtaskItem.getTitle());
            subtaskItemDTO.setStatus(subtaskItem.getStatus());
            subtaskItemDTO.setCreateDate(subtaskItem.getCreateDate());
            subtaskItemDTOS.add(subtaskItemDTO);
        }
        return subtaskItemDTOS;
    }
}
