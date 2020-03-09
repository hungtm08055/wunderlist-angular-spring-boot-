package com.example.demo.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "task")
public class TaskItem extends TimeStamp {

    public TaskItem() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;

    @Column(name = "title")
    public String title;

    @Column(name = "status")
    public int status = 0;

    @Column(name = "star")
    public int star = 0;

    @Column(name = "duedate")
    public String duedate;

    @Column(name = "reminder")
    public String reminder;

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

    public int getStar() {
        return star;
    }

    public void setStar(int star) {
        this.star = star;
    }

    public String getDuedate() {
        return duedate;
    }

    public void setDuedate(String duedate) {
        this.duedate = duedate;
    }

    public String getReminder() {
        return reminder;
    }

    public void setReminder(String reminder) {
        this.reminder = reminder;
    }

    @ManyToOne
    @NotNull
    @JoinColumn(name = "list_id",referencedColumnName = "id")
    private ListItem listItem;

    public ListItem getListItem() {
        return listItem;
    }

    public void setListItem(ListItem listItem) {
        this.listItem = listItem;
    }
}
