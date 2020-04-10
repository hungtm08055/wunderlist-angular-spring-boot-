package com.example.demo.restAPI;

import com.example.demo.DTO.FileItemDTO;
import com.example.demo.domain.FileItem;
import com.example.demo.domain.MyUploadForm;
import com.example.demo.domain.TaskItem;
import com.example.demo.service.FileItemService;
import com.example.demo.service.TaskItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FileItemRestAPI {
    @Autowired
    FileItemService fileItemService;

    @Autowired
    TaskItemService taskItemService;

    @GetMapping("/file/showFilebyTaskID")
    public List<FileItemDTO> findFileItem(@RequestParam(name = "task_id") long id)
    {
        List<FileItemDTO> fileItemDTOS = fileItemService.findFileByTaskID(id);
        return fileItemDTOS;
    }

    @DeleteMapping("file/delete")
    public void delete(@RequestParam(name = "id") long id, @RequestParam(name = "file_name") String filename)
    {
        String path = "src/main/resources/frontend/angular-app/src/assets/upload/" + filename;
        File file = new File(path);
        file.delete();
        fileItemService.delete(id);
    }

    // POST: Xử lý Upload
    @PostMapping("/uploadOneFile")
    public FileItem uploadOneFileHandlerPOST(@ModelAttribute("file") MultipartFile[] file,
                                              @Validated FileItemDTO fileItemDTO,
                                              @RequestParam(name = "task_id") long id)
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);
        FileItem fileItem = new FileItem();
        String name = this.doUpload(file);
        fileItem.setTitle(name);
        fileItem.setId(fileItemDTO.getId());
        fileItem.setCreateDate(fileItemDTO.getCreateDate());
        fileItem.setTaskItem(taskItem.get());
        fileItem = fileItemService.save(fileItem);
        return fileItem;
    }

//    https://o7planning.org/vi/11679/vi-du-upload-file-voi-spring-boot
    private String doUpload(MultipartFile[] file) {

        // Thư mục gốc upload file.
        String uploadRootPath = "src/main/resources/frontend/angular-app/src/assets/upload";
        System.out.println("uploadRootPath=" + uploadRootPath);
        String name = "";
        File uploadRootDir = new File(uploadRootPath);
        // Tạo thư mục gốc upload nếu nó không tồn tại.
        if (!uploadRootDir.exists()) {
            uploadRootDir.mkdirs();
        }

        MultipartFile[] fileDatas = file;
        //
        List<File> uploadedFiles = new ArrayList<File>();
        List<String> failedFiles = new ArrayList<String>();

        for (MultipartFile fileData : fileDatas) {

            // Tên file gốc tại Client.
            Random random = new Random();
            int number = random.nextInt((10000 - 1) + 1) + 1;

            name = fileData.getOriginalFilename().replace(".", number + ".");

            System.out.println("Client File Name = " + name);

            if (name != null && name.length() > 0) {
                try {
                    // Tạo file tại Server.
                    File serverFile = new File(uploadRootDir.getAbsolutePath() + File.separator + name);

                    BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
                    stream.write(fileData.getBytes());
                    stream.close();
                    //
                    uploadedFiles.add(serverFile);
                    System.out.println("Write file: " + serverFile);
                } catch (Exception e) {
                    System.out.println("Error Write file: " + name);
                    failedFiles.add(name);
                }
            }
        }
        return name;
    }
}



//    @PostMapping("/file/upload")
//    public ResponseEntity uploadVideoForExercise(@RequestHeader("file") MultipartFile file) throws IOException {
//        if (fileItemService.storeFile(file)) {
//            return new ResponseEntity<>(HttpStatus.OK);
//        } else {
//            return new ResponseEntity(HttpStatus.BAD_REQUEST);
//        }
//    }
