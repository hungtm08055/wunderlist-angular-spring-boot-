package com.example.demo.domain;

import org.springframework.web.multipart.MultipartFile;

public class MyUploadForm {

    // Upload files.
    private MultipartFile[] fileDatas;

    public MultipartFile[] getFileDatas() {
        return fileDatas;
    }

    public void setFileDatas(MultipartFile[] fileDatas) {
        this.fileDatas = fileDatas;
    }
}
