package com.example.demo.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "subtask")
public class SubtaskItem extends TimeStamp {

    public SubtaskItem() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;

    @NotNull
    @Column(name = "title")
    public String title;

    @Column(name = "status")
    public int status = 0;

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

    @ManyToOne
    @JoinColumn(name = "task_id",referencedColumnName = "id")
    private TaskItem taskItem;

    public TaskItem getTaskItem() {
        return taskItem;
    }

    public void setTaskItem(TaskItem taskItem) {
        this.taskItem = taskItem;
    }
}
