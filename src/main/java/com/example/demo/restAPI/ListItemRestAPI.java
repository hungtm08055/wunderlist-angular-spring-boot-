package com.example.demo.restAPI;

import com.example.demo.DTO.ListItemDTO;
import com.example.demo.domain.ListItem;
import com.example.demo.domain.User;
import com.example.demo.service.ListService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Optional;

@RestController
public class ListItemRestAPI {
    @Autowired
    private ListService listService;

    @Autowired
    private UserService userService;

    @GetMapping("/list/getAll")
    public List<ListItemDTO> getAll()
    {
        return listService.findAll();
    }

    @GetMapping("/list/getID/{id}")
    public Optional<ListItem> getByID(@PathVariable("id") String id)
    {
        Optional<ListItem> list = listService.findOne((Long.valueOf(id)));

        if (!list.isPresent())
        {
            System.out.println("Not found ID");
        }
        else
        {
            list = listService.findOne((Long.valueOf(id)));
        }
        return list;
    }

    @GetMapping("list/getListByUserID")
    public List<ListItem> findAllListByUserID(@RequestParam(name = "user_id") long user_id)
    {
        List<ListItem> listItems = (List<ListItem>) listService.findAllListbyUserID(user_id);

        return listItems;
    }

    @PostMapping("/list/add")
    public ListItem add(@Validated ListItemDTO listItemDTO, @RequestParam(name = "user_id") long id)
    {
        Optional<User> user = userService.findOne(id);
        ListItem listItem = new ListItem();
        String title = listItemDTO.getTitle();
        listItem.setTitle(title.replace("\"",""));
        listItem.setEmail(listItemDTO.getEmail());
        listItem.setUser(user.get());
        return listService.save(listItem);
    }

    @PutMapping("/list/update")
    public ListItem update(@Validated ListItemDTO listItemDTO,@RequestParam(name = "id") long id)
    {
        Optional<ListItem> listItem = listService.findOne(id);
        ListItem listItem1 = listItem.get();

        if (!listItem.isPresent())
        {
            return null;
        }
        else
        {
            listItem1.setTitle(listItemDTO.getTitle().replace("\"",""));
            listService.save(listItem1);
        }
        return listItem1;

    }

    @DeleteMapping("/list/delete/{id}")
    public ResponseEntity<Void> deleteByID(@PathVariable("id") long id)
    {
       if (listService.delete(id)) {
           return new ResponseEntity<>(HttpStatus.OK);
       } else
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
