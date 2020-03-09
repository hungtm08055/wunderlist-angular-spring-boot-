package com.example.demo.repository;

import com.example.demo.domain.FileItem;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.io.File;
import java.util.List;

public interface FileItemRepository extends CrudRepository<FileItem,Long> {
    @Query(value = "SELECT f FROM FileItem f WHERE f.taskItem.id=?1")
    List<FileItem> findFileItemByTaskItem(long id);
}
