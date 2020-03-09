package com.example.demo.repository;

import com.example.demo.domain.ListItem;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ListRepository extends CrudRepository<ListItem,Long> {
    @Query(value = "SELECT l FROM ListItem l WHERE l.user.id=?1")
    List<ListItem> findListItemByUser(long id);
}
