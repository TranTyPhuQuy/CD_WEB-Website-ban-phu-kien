package com.cdweb.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdweb.springboot.entities.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
	  List<Comment> findByProductId(Long productId);
	    List<Comment> findByParentCommentId(Long parentCommentId);
}
