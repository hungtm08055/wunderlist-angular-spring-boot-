package com.example.demo.DTO;

import com.example.demo.domain.TimeStamp;

public class SubtaskItemDTO extends TimeStamp {
    private long id;
    private String title;
    private int status = 0;

    public SubtaskItemDTO() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
