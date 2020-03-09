package com.example.demo.repository;

import com.example.demo.domain.SubtaskItem;
import org.springframework.data.repository.CrudRepository;

public interface SubtaskItemRepository extends CrudRepository<SubtaskItem,Long> {
}
