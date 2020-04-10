package com.example.demo.DTO;

import com.example.demo.domain.TimeStamp;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotNull;

public class FileItemDTO extends TimeStamp {
    public long id;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String title;
    public long createdate;

    public long getCreatedate() {
        return createdate;
    }

    public void setCreatedate(long createdate) {
        this.createdate = createdate;
    }

    public FileItemDTO() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

//    public MultipartFile filepath;
//
//    public MultipartFile getFilepath() {
//        return filepath;
//    }
//
//    public void setFilepath(MultipartFile filepath) {
//        this.filepath = filepath;
//    }
}
