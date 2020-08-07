package com.team5.remotivity.auth.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import com.team5.remotivity.auth.models.Calendar;
import com.team5.remotivity.auth.models.Item;
import com.team5.remotivity.auth.models.History;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team5.remotivity.auth.repository.CalendarRepository;
import com.team5.remotivity.auth.repository.ItemRepository;
import com.team5.remotivity.auth.repository.HistoryRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api/auth")
public class CalendarController {

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    CalendarRepository calendarRepository;

    @Autowired
    HistoryRepository historyRepository;

    // item starts here
    @GetMapping("/item")
    public ResponseEntity<List<Item>> getAllItem(@RequestParam(required = false) String title) {
        try {
            List<Item> items = new ArrayList<Item>();

            if (title == null)
                itemRepository.findAll().forEach(items::add);
            else
                itemRepository.findByTitleContaining(title).forEach(items::add);

            if (items.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(items, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/item/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable("id") long id) {
        Optional<Item> itemData = itemRepository.findById(id);

        if (itemData.isPresent()) {
            return new ResponseEntity<>(itemData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/item")
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        try {
            Item _item = itemRepository
                    .save(new Item(item.getTitle(), item.getStartDate(), item.getDescription(), item.getEndDate(), item.getCalendarType()));
            return new ResponseEntity<>(_item, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/item/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable("id") long id, @RequestBody Item item) {
        Optional<Item> itemData = itemRepository.findById(id);

        if (itemData.isPresent()) {
            Item _item = itemData.get();
            _item.setTitle(item.getTitle());
            _item.setStartDate(item.getStartDate());
            _item.setDescription(item.getDescription());
            _item.setEndDate(item.getEndDate());
            _item.setCalendarType(item.getCalendarType());
            return new ResponseEntity<>(itemRepository.save(_item), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/item/{id}")
    public ResponseEntity<HttpStatus> deleteItem(@PathVariable("id") long id) {
        try {
            itemRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/calendar")
    public ResponseEntity<Calendar> createCalendar(@RequestBody Calendar calendar) {
        try {
            Calendar _calendar = calendarRepository
                    .save(new Calendar(calendar.getItem()));
            return new ResponseEntity<>(_calendar, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/history")
    public ResponseEntity<History> createHistory(@RequestBody History history) {
        try {
            History _history = historyRepository
                    .save(new History(history.getDate(), history.getDayRating()));
            return new ResponseEntity<>(_history, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/history/{id}")
    public ResponseEntity<History> getHistoryById(@PathVariable("id") long id) {
        Optional<History> historyData = historyRepository.findById(id);

        if (historyData.isPresent()) {
            return new ResponseEntity<>(historyData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}