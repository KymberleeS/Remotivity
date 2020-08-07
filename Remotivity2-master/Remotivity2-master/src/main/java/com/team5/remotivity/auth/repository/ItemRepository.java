package com.team5.remotivity.auth.repository;

import java.util.List;

import com.team5.remotivity.auth.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findByTitleContaining(String title);
}
