package com.cdweb.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdweb.springboot.dto.CreateCommentDTO;
import com.cdweb.springboot.entities.Comment;
import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.entities.User;
import com.cdweb.springboot.projection.CommentProjection;
import com.cdweb.springboot.repository.CommentRepository;
import com.cdweb.springboot.repository.UserRepository;
import com.cdweb.springboot.response.ResponseApi;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    public Comment getCommentById(Long id) {
        return commentRepository.findById(id).orElse(null);
    }
    public List<CommentProjection> getCommentsByProductId(Long productId) {
        return commentRepository.findByProductId(productId);
    }

    public List<Comment> getRepliesByCommentId(Long commentId) {
        return commentRepository.findByParentCommentId(commentId);
    }

    public ResponseApi replyToComment(Long parentCommentId, CreateCommentDTO createCommentDTO) {
        Comment parentComment = commentRepository.findById(parentCommentId).orElseThrow(() -> new RuntimeException("Parent comment not found"));
        Comment replyComment = new Comment();
        replyComment.setContent(createCommentDTO.getContent());
        replyComment.setAuthor(createCommentDTO.getAuthor());
        replyComment.setParentComment(parentComment);

        if (createCommentDTO.getProductId() == null || createCommentDTO.getUserId() == null) {
            return new ResponseApi("failed", "Cannot comment");
        }
        Product product = new Product();
        product.setId(createCommentDTO.getProductId());
        replyComment.setProduct(product);
        
        User user = userRepository.findById(createCommentDTO.getUserId()).orElse(null);
        replyComment.setUser(user);
        
        commentRepository.save(replyComment);

        return new ResponseApi("success", "Comment added");
    }
    public ResponseApi createComment(CreateCommentDTO createCommentDTO) {
        Comment comment = new Comment();
        comment.setContent(createCommentDTO.getContent());
        comment.setAuthor(createCommentDTO.getAuthor());

        if (createCommentDTO.getProductId() == null || createCommentDTO.getUserId() == null) {
            return new ResponseApi("failed", "Cannot comment");
        }
        Product product = new Product();
        product.setId(createCommentDTO.getProductId());
        comment.setProduct(product);
        
        User user = userRepository.findById(createCommentDTO.getUserId()).orElse(null);
        comment.setUser(user);

        if (createCommentDTO.getParentCommentId() != null) {
            Comment parentComment = new Comment();
            parentComment.setId(createCommentDTO.getParentCommentId());
            comment.setParentComment(parentComment);
        }
        commentRepository.save(comment);
        return new ResponseApi("success", "Comment added");
    }

    public void deleteComment(Long id) {
        commentRepository.deleteById(id);
    }
}
