package com.example.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.Date;


@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class TimeStamp implements Serializable {
    private static final long serialVersionUID = 1L;
    // chieu chuyen lop timestamp vao model
    @CreatedDate
    @Column(name = "createdate",nullable = false,updatable = false)
    @JsonIgnore
    private Instant createDate = Instant.now();

    public Instant getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Instant createDate) {
        this.createDate = createDate;
    }
}
