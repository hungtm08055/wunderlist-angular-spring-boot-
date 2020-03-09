package com.example.demo.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "list")
public class ListItem extends TimeStamp {
    public ListItem() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;

//    @NotNull
    @Column(name = "title")
    public String title;

    @Column(name = "email")
    public String email;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @ManyToOne
    @NotNull
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
