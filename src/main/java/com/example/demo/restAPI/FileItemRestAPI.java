package com.example.demo.restAPI;

import com.example.demo.DTO.FileItemDTO;
import com.example.demo.domain.FileItem;
import com.example.demo.domain.MyUploadForm;
import com.example.demo.domain.TaskItem;
import com.example.demo.service.FileItemService;
import com.example.demo.service.TaskItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class FileItemRestAPI {
    @Autowired
    FileItemService fileItemService;

    @Autowired
    TaskItemService taskItemService;

    @GetMapping("file/getAll")
    public List<FileItem> getAll()
    {
        return (List<FileItem>) fileItemService.findAll();
    }

    @GetMapping("file/getID/{id}")
    public Optional<FileItem> getByID(@PathVariable("id") long id)
    {
        return fileItemService.findOne(id);
    }

    @GetMapping("/file/showbyTaskID")
    public List<FileItemDTO> findFileItem(@RequestParam(name = "task_id") long id)
    {
        List<FileItemDTO> fileItemDTOS = fileItemService.findFileByTaskID(id);
        return fileItemDTOS;
    }

    @PutMapping("/file/update")
    public FileItem update(@RequestBody FileItemDTO fileItemDTO)
    {
        Optional<FileItem> fileItem = fileItemService.findOne(fileItemDTO.getId());
        FileItem fileItem1 = fileItem.get();
        fileItem1.setTitle(fileItemDTO.getTitle());

        if (!fileItem.isPresent())
        {
            return null;
        }
        else
        {
            fileItemService.save(fileItem1);
        }
        return fileItem1;
    }

    @DeleteMapping("file/getID/{id}")
    public void delete(long id)
    {
        fileItemService.delete(id);
    }

    // POST: Sử lý Upload
    @PostMapping(value = "/uploadOneFile")
    public ModelAndView uploadOneFileHandlerPOST( HttpServletRequest request, Model model, @ModelAttribute("myUploadForm") MyUploadForm myUploadForm, @Validated FileItemDTO fileItemDTO,@RequestParam(name = "task_id") long id)
    // @ModelAttribute dung de map doi tuong MyUploadFỏrm da co ben client tu luc dang nhap truyen vao
    {
        Optional<TaskItem> taskItem = taskItemService.findOne(id);
        FileItem fileItem = new FileItem();
        String name = this.doUpload(request, model, myUploadForm);
        fileItem.setTitle(name);
        fileItem.setId(fileItemDTO.getId());
        fileItem.setCreateDate(fileItemDTO.getCreateDate());
        fileItem.setTaskItem(taskItem.get());
        fileItemService.save(fileItem);
        ModelAndView modelAndView = new ModelAndView("hienthi.html");
        return modelAndView;
    }

    private String doUpload(HttpServletRequest request, Model model, //
                            MyUploadForm myUploadForm) {

        // Thư mục gốc upload file.
        String uploadRootPath = "src/main/resources/static/upload";
        System.out.println("uploadRootPath=" + uploadRootPath);
        String name = "";
        File uploadRootDir = new File(uploadRootPath);
        // Tạo thư mục gốc upload nếu nó không tồn tại.
        if (!uploadRootDir.exists()) {
            uploadRootDir.mkdirs();
        }

        MultipartFile[] fileDatas = myUploadForm.getFileDatas();
        //
        List<File> uploadedFiles = new ArrayList<File>();
        List<String> failedFiles = new ArrayList<String>();

        for (MultipartFile fileData : fileDatas) {

            // Tên file gốc tại Client.
            name = fileData.getOriginalFilename();
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
//        model.addAttribute("description", description);
        model.addAttribute("uploadedFiles", uploadedFiles);
        model.addAttribute("failedFiles", failedFiles);
        return name;

    }
}
