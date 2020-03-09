package com.example.demo.service;

import com.example.demo.DTO.FileItemDTO;
import com.example.demo.domain.FileItem;
import com.example.demo.repository.FileItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FileItemService {
    @Autowired
    FileItemRepository fileItemRepository;

    public Iterable<FileItem> findAll()
    {
        return fileItemRepository.findAll();
    }

    public Optional<FileItem> findOne(long id)
    {
        return fileItemRepository.findById(id);
    }

    public FileItem save(FileItem fileItem)
    {
        return fileItemRepository.save(fileItem);
    }

    public void delete(long id)
    {
        fileItemRepository.deleteById(id);
    }

    public List<FileItemDTO> findFileByTaskID(long id)
    {
        List<FileItem> fileItems = fileItemRepository.findFileItemByTaskItem(id);
        List<FileItemDTO> fileItemDTOS = new ArrayList<>();

        for (FileItem fileItem : fileItems)
        {
            FileItemDTO fileItemDTO = new FileItemDTO();
            fileItemDTO.setId(fileItem.getId());
            fileItemDTO.setTitle(fileItem.getTitle());
            fileItemDTO.setCreatedate(fileItem.getCreateDate().toEpochMilli());
            fileItemDTOS.add(fileItemDTO);
        }
        return fileItemDTOS;
    }
}
