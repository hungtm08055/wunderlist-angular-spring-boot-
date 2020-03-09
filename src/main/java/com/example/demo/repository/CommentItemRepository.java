package com.example.demo.repository;

import com.example.demo.domain.CommentItem;
import org.springframework.data.repository.CrudRepository;

public interface CommentItemRepository extends CrudRepository<CommentItem,Long> {
}
