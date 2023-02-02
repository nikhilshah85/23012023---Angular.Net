﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ng_ShoppingAPI.Models.EF;

public partial class NgshoppingDbContext : DbContext
{
    public NgshoppingDbContext()
    {
    }

    public NgshoppingDbContext(DbContextOptions<NgshoppingDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<ProductDetail> ProductDetails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("server=(localdb)\\MSSQLLocalDB;database=NGshoppingDB;integrated security=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ProductDetail>(entity =>
        {
            entity.HasKey(e => e.PId).HasName("PK__ProductD__DD36D562CF5F9612");

            entity.Property(e => e.PId)
                .ValueGeneratedNever()
                .HasColumnName("pId");
            entity.Property(e => e.PCategory)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("pCategory");
            entity.Property(e => e.PIsInStock).HasColumnName("pIsInStock");
            entity.Property(e => e.PName)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("pName");
            entity.Property(e => e.PPrice).HasColumnName("pPrice");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
