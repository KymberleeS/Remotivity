package com.team5.remotivity.auth.repository;

import java.util.List;

import com.team5.remotivity.auth.models.History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<History, Long> {
    List<History> findByDate(String date);
}

