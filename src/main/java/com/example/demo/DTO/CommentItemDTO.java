package com.example.demo.DTO;

import com.example.demo.domain.TimeStamp;

public class CommentItemDTO extends TimeStamp {
    public long id;
    public String title;

    public CommentItemDTO() {
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
}
