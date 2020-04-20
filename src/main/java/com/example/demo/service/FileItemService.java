package com.example.demo.service;

import com.example.demo.DTO.FileItemDTO;
import com.example.demo.domain.FileItem;
import com.example.demo.repository.FileItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

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

    public boolean delete(long id)
    {
        if (fileItemRepository.findById(id).isPresent()) {
            fileItemRepository.deleteById(id);
            return true;
        }
        return false;
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


//    public boolean storeFile(MultipartFile file) {
//        // Normalize file name
//        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//        return true;
//    }
}
