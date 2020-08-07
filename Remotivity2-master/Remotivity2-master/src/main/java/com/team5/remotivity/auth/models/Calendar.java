package com.team5.remotivity.auth.models;

import javax.persistence.*;

@Entity
@Table(name = "calendar")
public class Calendar {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    // A foreign key?
    @Column(name = "itemId")
    private long itemId;

    public Calendar() {
    }

    public Calendar(long itemId) {
        this.itemId = itemId;
    }

    public long getItem() {
        return itemId;
    }

    public void setItem(long itemId) {
        this.itemId = itemId;
    }

    @Override
    public String toString() {
        return "Calendar [id=" + id + ", itemId=" + itemId + "]";
    }
}