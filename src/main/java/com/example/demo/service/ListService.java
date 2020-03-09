package com.example.demo.service;

import com.example.demo.DTO.ListItemDTO;
import com.example.demo.domain.ListItem;
import com.example.demo.repository.ListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ListService {
    @Autowired
    ListRepository listRepository;

    public List<ListItemDTO> findAll()
    {
        List<ListItem> listItems = (List<ListItem>) listRepository.findAll();
        List<ListItemDTO> listItemDTOS = new ArrayList<>();
        for(ListItem listItem: listItems) {
              ListItemDTO listItemDTO = new ListItemDTO();
              listItemDTO.setCreatedate(listItem.getCreateDate().toEpochMilli());
              listItemDTO.setId(listItem.getId());
              listItemDTO.setTitle(listItem.getTitle());
              listItemDTO.setEmail(listItem.getEmail());
              listItemDTOS.add(listItemDTO);
        }
        return listItemDTOS;
    }
    public Optional<ListItem> findOne(long id)
    {
        return listRepository.findById(id);
    }
    public ListItem save(ListItem list)
    {
       return listRepository.save(list);
    }
    public boolean delete(long id)
    {
        if(listRepository.findById(id).isPresent()) {
            listRepository.deleteById(id);
            return true;
        }
        return false;
    }
    public Iterable<ListItem> findAllListbyUserID(long user_id)
    {
        return listRepository.findListItemByUser(user_id);
    }
}
