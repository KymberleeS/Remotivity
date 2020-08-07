package com.team5.remotivity.auth.repository;

import java.util.List;

import com.team5.remotivity.auth.models.Calendar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CalendarRepository extends JpaRepository<Calendar, Long> {
}