package com.example.demo.repository;

import com.example.demo.domain.SubtaskItem;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SubtaskItemRepository extends CrudRepository<SubtaskItem,Long> {
    @Query(value = "SELECT st FROM SubtaskItem st WHERE st.taskItem.id=?1")
    List<SubtaskItem> findAllByTaskItem(long id);

}
