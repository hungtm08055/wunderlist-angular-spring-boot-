package com.example.demo.repository;

import com.example.demo.domain.CommentItem;
import com.example.demo.domain.SubtaskItem;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CommentItemRepository extends CrudRepository<CommentItem,Long> {
    @Query(value = "SELECT c FROM CommentItem c WHERE c.taskItem.id=?1")
    List<CommentItem> findAllByTaskItem(long id);
}
