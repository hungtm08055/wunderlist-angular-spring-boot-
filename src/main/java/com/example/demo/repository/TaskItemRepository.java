package com.example.demo.repository;


import com.example.demo.domain.TaskItem;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskItemRepository extends CrudRepository<TaskItem,Long> {
    @Query(value = "SELECT t FROM TaskItem t WHERE t.title LIKE %?1%")
    List<TaskItem> findAllByTitle(String title);

    @Query(value = "SELECT t FROM TaskItem t WHERE t.listItem.id=?1 AND t.status=?2")
    List<TaskItem> findTaskItemByListItem(long id,long status);

    @Query(value = "SELECT t FROM TaskItem t WHERE t.id=?1")
    List<TaskItem> findTaskItemById(long id);
}
